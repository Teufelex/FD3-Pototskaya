const ISShop = React.createClass({
    displayName: "ISShop", 

    getDefaultProps: function() {
        return {section: "Main Page"}
    },
   
    render: function() {        
        let listItem = React.createElement(IsShopItem, {items: this.props.items})

        return React.DOM.div({className: "section"},
            React.DOM.h2({className: "section__name"}, this.props.section),
            React.DOM.div({}, listItem),
        );
    },
});