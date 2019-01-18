import React from 'react';
import _ from 'lodash';

export default class SearchInput extends React.PureComponent {
    state = {
        search: '',
        isPopupVisible: false
    };

    onSearchChange = _.debounce(this.props.onSearchChange, 300);

    componentDidMount() {
        document.addEventListener('click', () => {
            if(this.state.isPopupVisible) {
                this.setState({ isPopupVisible: false });
            }
        })
    }

    onChange = (e) => {
        const search = e.target.value;

        this.setState({ search });

        if(search && search.length >= 3) {
            this.onSearchChange(search);
            
            if(!this.isPopupVisible) {
                this.setState({ isPopupVisible: true });
            }
        }
    }

    onProposalSelect = city => () => {
        const { onCityChange } = this.props;

        onCityChange(city.id, city.name);
    }

    render() {
        const { search, isPopupVisible } = this.state;
        const { cities } = this.props;

        const renderProposals = () => {
            if(cities.length) {
                return cities.map(
                    (item) => <li className="search__proposials-item" key={item.id} onClick={this.onProposalSelect(item)}>{item.name}</li>
                );
            } 
            
            return <div className="search__proposials-empty-text">Nothing found :(</div>
        }
            
        return (
            <div className="search">
                <div className="search__input-wrap">
                    <input className="search__input" value={search} onChange={this.onChange} />
                </div>
                {isPopupVisible && 
                    <ul className="search__proposials" onClick={this.onProposalSelect}>
                        {renderProposals()}
                    </ul>
                }
            </div>            
        );
    }
}