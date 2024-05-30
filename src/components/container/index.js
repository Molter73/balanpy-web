export default function Container({styles, children}) {
    return (
        <div className={`flex flex-col align-center justify-between items-between border-[3px] border-balanpy-800 rounded-[25px] ${styles}`} >
            {children}
        </div>
    )
}

Container.defaultProps = {
    styles : "bg-white"
  }