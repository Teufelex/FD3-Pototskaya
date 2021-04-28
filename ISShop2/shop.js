const ISShop = React.createClass({
    displayName: "ISShop", 

    getDefaultProps: function() {
        return {section: "Main Page"}
    },

    getInitialState: function() {
        return {
            items: this.props.items,
            activeElement: null,
        }
    },

    deleteElement: function(code) {
        this.setState({items: this.state.items.filter(b => (b.code !== code))})
    },

    elementClicked: function(code) {
        this.setState({activeElement: (this.state.activeElement === code) ? null : code});
    },
   
    render: function() {        
        const ITEMS = [];
        this.state.items.forEach(b => {
            let shopElement = React.createElement(IsShopItem, {
                key: b.code,
                name: b.name,
                code: b.code,
                price: b.price,
                url: b.url,
                count: b.count,
                isActive: (b.code === this.state.activeElement),
                cbDeleted: this.deleteElement,
                cbClicked: this.elementClicked,
            });
            ITEMS.push(shopElement);
        });

        return React.DOM.div({className: "section"},
            React.DOM.h2({className: "section__name"}, this.props.section),
            React.DOM.div({className: "section__items"}, ITEMS),
        );
    },
});