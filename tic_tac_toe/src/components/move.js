function Move(props) {
    return (
        <li>
          <button className={props.className} onClick={ props.onClick }>{ props.desc }</button>
        </li>
    );
}

export default Move;