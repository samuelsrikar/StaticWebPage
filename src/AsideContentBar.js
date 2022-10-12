import './AsideContentBar.css';

function setClickPage(props) {

}

function Anchor(props) {
    return (
        <a className='a-style-content' onClick={(e) => { setClickPage() }} href={props.href} >{props.name}</a>
    );
}

function AsideContentBar(props) {
    const list = [];
    // for (let iterator of props.ContentItems) {
    //     list.push(<a href="#">{iterator}</a>);
    // }

    switch (props.asideName) {
        case "HTML":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />
                </div>

            );


        case "CSS":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />
                </div>

            );

        case "JS":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />

                </div>

            );

        case "React":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />
                </div>

            );

        case "C":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />
                </div>

            );

        case "C++":
            return (
                <div class="aside-content-bar">
                    <Anchor name="Introduction" href="#" />
                </div>

            );
        default:
            return (
                <div class="aside-content-bar">
                    <p>{props.asideName}</p>
                </div>

            );

    }
}

export { AsideContentBar };