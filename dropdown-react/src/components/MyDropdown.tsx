interface IMyDropdown {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
  listValue: string[] | null;
  className: string;
  closeAllDropdown: () => void;
}

const MyDropdown = ({
  isDropdownOpen,
  setIsDropdownOpen,
  value,
  listValue,
  setValue,
  className,
  closeAllDropdown,
}: IMyDropdown) => {
  return (
    <div className={`custom-select ${isDropdownOpen ? "active" : null}`}>
      <button
        disabled={!listValue}
        className={` select-button ${className}`}
        role="combobox"
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        onClick={() => {
          closeAllDropdown();
          setIsDropdownOpen((prev) => !prev);
        }}
        aria-controls="select-dropdown"
      >
        <span className="selected-value">
          {value !== null && listValue ? listValue[value] : "Pilih Jenjang"}
        </span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        {listValue?.map((item, idx) => (
          <li
            key={item}
            role="option"
            onClick={() => {
              setValue(idx);
              closeAllDropdown();
            }}
          >
            <input type="radio" id={item} />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyDropdown;
