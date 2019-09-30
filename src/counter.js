import React from 'react';
import {increment, decrement} from './actions/index';
import {connect} from 'react-redux';

const Counter = ({count, increment, decrement}) => {

    return (
        <div>
            <button onClick={increment}>
                +
            </button>
            <span>
              
                Counter {count.count}
            </span>
            <button onClick={decrement}>
                -
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);