import './AsideContentBar.css';

function AsideContentBar(props)
{
    const list = [];
    for (let iterator of props.ContentItems) {
        list.push(<a href="#">{iterator}</a>);
    }

    return(
        <div class="aside-content-bar">
            {
            list
            }
        </div>

    );
}

export {AsideContentBar};