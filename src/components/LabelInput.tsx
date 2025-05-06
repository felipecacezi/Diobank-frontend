interface LabelProps {
    text: string;
    id: string;
    className?: string;
  }
  
  const classes = `block mb-2 text-sm font-medium text-gray-900 dark:text-white `;

  export const LabelInput = ({id, className, text}: LabelProps)=>(
    <label id={id}
      data-testid={id} 
      className={classes + className}>{text}</label>
  )