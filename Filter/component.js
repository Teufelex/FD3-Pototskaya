const VOCABLIST = React.createClass({
    
    displayName: "wocabList",

    propTypes: {
       words: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },

    getInitialState: function() {
        return {
            activeVocabulary: this.props.words,
            initialVocabulary: this.props.words,
            autoSorted: false,
            searchFieldValue: "",
        };
    },

    searchFieldHasChanged: function(e) {
        let sortedArray = [];
        let currVal = e.target.value;
        let searchStr = new RegExp(currVal, "ig");
        this.props.words.forEach(b => {
           let res = b.search(searchStr);
           if (res >= 0) sortedArray.push(b);
        });
        this.setState ({activeVocabulary: (this.state.autoSorted) ?
            JSON.parse(JSON.stringify(sortedArray)).sort() : sortedArray, 
            initialVocabulary: sortedArray, 
            searchFieldValue: currVal,});
    },

    sortChecked: function(e) {
        if (e.target.checked) {
            this.setState ({activeVocabulary: JSON.parse(JSON.stringify(this.state.activeVocabulary)).sort(),
            autoSorted: true});
        } else {
            this.setState ({activeVocabulary: this.state.initialVocabulary, autoSorted: false});
        }
    },

    reset: function() {
        this.setState({
            activeVocabulary: this.props.words,
            initialVocabulary: this.props.words,
            autoSorted: false,
            searchFieldValue: "",
        })
    },

    render: function() {
        const LIST = [];
        this.state.activeVocabulary.forEach(b => {
            let listItem = React.DOM.li({key: this.state.activeVocabulary.indexOf(b), className: "list__item"}, b);
            LIST.push(listItem);
        });

        return React.DOM.div({className: "wocab__block"},
            React.DOM.input({type: "checkbox", checked: this.state.autoSorted, onClick: this.sortChecked}),
            React.DOM.input({value: this.state.searchFieldValue, onChange: this.searchFieldHasChanged}),
            React.DOM.input({type: "button", value: "Сбросить", onClick: this.reset}),
            React.DOM.ul({className: "wocab__list"}, LIST),
        );
    },
});