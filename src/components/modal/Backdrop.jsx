const Backdrop= (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[97] bg-amber-800/75" onClick={props.onConfirm}></div>
    )
}

export default Backdrop;