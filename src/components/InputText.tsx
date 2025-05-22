interface InputProps {
  id: string;
  name?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const classes = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `;

export const InputText = ({
  id,
  name,
  className = '',
  type = 'text',
  placeholder,
  onChange,
}: InputProps) => (
  <input type={type}
    id={id}
    data-testid={id}
    name={name}
    className={classes + className}
    placeholder={placeholder}
    onChange={onChange} />
);
