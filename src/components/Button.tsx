interface ButtonProps {
    id: string;
    text:string;
    className?: string;
    typeButton: "primary" | "secondary" | "warning" | "danger";
    onClick?: () => void;
}

const getTypeButton = (typeButton: string) => {
    switch (typeButton){
        case 'primary':
            return `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
            text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full`
        break
        case 'secondary':
            return `text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 
            focus:outline-none focus:ring-gray-300 font-medium rounded-lg 
            text-sm w-full px-5 py-2.5 text-center dark:bg-gray-600 
            dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-full`
        break
        case 'warning':
            return `text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 
            focus:outline-none focus:ring-yellow-300 font-medium rounded-lg 
            text-sm w-full px-5 py-2.5 text-center dark:bg-yellow-600 
            dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 w-full`
        break
        case 'danger':
            return `text-white bg-red-700 hover:bg-red-800 focus:ring-4 
            focus:outline-none focus:ring-red-300 font-medium rounded-lg 
            text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 
            dark:hover:bg-red-700 dark:focus:ring-red-800 w-full`
        break
    }
}


export const Button = ({id, text, className, typeButton, onClick}: ButtonProps) => {

    const handleOnClick = () => {
        if(onClick){
            onClick()
        }
    }
    
    const classes = `${getTypeButton(typeButton)} ${className}`

    return (
        <button id={id} type="button"
            data-testid={id}
            className={classes}
            onClick={() => handleOnClick()}>
            {text}
        </button>
    );
}