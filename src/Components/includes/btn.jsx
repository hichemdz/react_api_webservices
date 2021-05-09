


export const Btn = ({children,calss,onClick}) =>
     (
       <button
         onClick={onClick}
         className={'focus:outline-none  ' + (calss||'' )}
       >
        {children}
      </button>
     )
