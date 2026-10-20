type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
};

export function SearchField({ value, onChange, label }: SearchFieldProps) {
  return (
    <label className="search-field">
      <span aria-hidden="true" className="search-field__icon">⌕</span>
      <span className="sr-only">{label}</span>
      <input
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        type="search"
        value={value}
      />
    </label>
  );
}
