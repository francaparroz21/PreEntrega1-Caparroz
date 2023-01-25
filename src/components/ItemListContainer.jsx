//Componente ItemListContainer, siempre retorna una lista con un enlace, si contiene imagen se agrega la etiqueta 'img'.

const ItemListContainer = (props) =>{
    if(props.routeImg != null){
        return(
            <li className={props.className}><a className="nav-link" href={props.route}><img src={props.routeImg} alt="" /></a></li>
        )
    }
    return(
        <li className={props.className}><a className="nav-link" href={props.route}>{props.content}</a></li>
    )
}

export default ItemListContainer;