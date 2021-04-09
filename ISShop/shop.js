const ISShop = React.createClass({
    displayName: "ISShop", 

    getDefaultProps: function() {
        return {section: "Main Page"}
    },
   
    render: function() {
        const ITEMS = [];
        this.props.items.forEach(b => {
            let itemCode = 
            React.DOM.div({key: b.code, className: "section__item"},
                React.DOM.img({src: b.url, alt: "parfum", className: "item__photo"}),
                React.DOM.span({className: "item__name"}, b.name),
                React.DOM.span({className: "item__count"}, "Осталось " + b.count + " ед."),
                React.DOM.span({className: "item__price"}, b.price + "p."),
            );
            ITEMS.push(itemCode);
        });
        
        return React.DOM.div({className: "section"},
            React.DOM.h2({className: "section__name"}, this.props.section),
            React.DOM.div({className: "section__items"}, ITEMS),
        );
    },
});