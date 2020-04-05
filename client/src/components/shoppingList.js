import React, {Component} from 'react';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from "../actions/itemactions";
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item; // same as <===> const items = this.props.item.items
        return (
            <Container>
                <div>
                    <ol className="shopping-list">
                        {items.map(({ _id, name}) => (
                                <li key={_id}>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => this.onDeleteClick(_id)}
                                    >&times;</Button>
                                    {name}
                                </li>
                        ))}
                    </ol>
                </div>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);