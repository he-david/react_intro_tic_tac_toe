function Move(props) {
    return (
        <li>
          <button onClick={ props.onClick }>{ props.desc }</button>
        </li>
    );
}

export default Move;