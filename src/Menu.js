class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav : false
        };

        this.handleNavigateTo = this.handleNavigateTo.bind(this);
    }

    showNav = () => {
        this.setState({
            showNav : true
        });
    }

    hideNav = () => {
        this.setState({
            showNav : false
        });
    }

    handleNavigateTo (event) {
        this.props.navigateToFunction(event.target.getAttribute("data"));
        this.hideNav();
    }

    render() {
        return (
            <div>
                <a className="Menu" onClick={this.showNav} />
                <div className= {this.state.showNav ? "RightNav Show" : "RightNav"} >
                    <div className="Content">
                        <div className="Header">
                            <a 
                                className="BackArrow" 
                                onClick={this.hideNav} />
                        </div>
                        <div className = "List">
                            <div className = "Item">
                                <a onClick={this.handleNavigateTo} data='home'> Home </a>
                            </div>
                            <div className = "Item">
                                <a onClick={this.handleNavigateTo} data='item'> Show List </a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}

export default Menu;