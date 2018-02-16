import React from 'react';
import allOrders from './data/orders';
import OrderItem from "./OrderItem";

class OrdersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 1,
            searchInput: '',
            ordersPerPage: 10
        }

        this.handlePageClick = this.handlePageClick.bind(this)
        this.handlePageDirection = this.handlePageDirection.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleOrdersPerPage = this.handleOrdersPerPage.bind(this)

    }

    handlePageClick(e){
        this.setState({
            pageNumber: e,
                      })
    }

    handlePageDirection(e){
        this.setState({
            pageNumber: e ? this.state.pageNumber+1 : this.state.pageNumber-1
                      })
    }

    handleInput(e){
        this.setState({
            pageNumber: 1,
            searchInput: e.target.value
                      })
    }

    handleOrdersPerPage(e){
        this.setState({
            pageNumber: 1,
            ordersPerPage: e
                      })
    }

    render() {
        let filteredOrders = allOrders.filter(ord => ord.name.toLowerCase().includes(this.state.searchInput.toLowerCase()));
        const orderItemList = filteredOrders.map((order, index) => {
            return <OrderItem
                key={index}
                title={order.title}
                id={order.id}
                username={order.name}
                type={order.type}
            />
        });

        let pageCount = Math.ceil(filteredOrders.length / this.state.ordersPerPage);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
                pages.push(
                    <li
                        key={i}
                        className={this.state.pageNumber === i ? 'active' : ''}>
                        <a onClick={() => this.handlePageClick(i)}>
                            {i}
                        </a>
                    </li>
                )
        }

        let ordersPerPage = [5, 10, 20];
        let ordersPerPageButtons = [];
        for (let i = 0; i < ordersPerPage.length; i++) {
            ordersPerPageButtons.push(
                <button type="button"
                        key={i}
                        className={this.state.ordersPerPage === ordersPerPage[i]
                            ? "btn btn-default navbar-btn active" : "btn btn-default navbar-btn"}
                        onClick={() => this.handleOrdersPerPage(
                            ordersPerPage[i])}>{ordersPerPage[i]}
                </button>
            )
        }

        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search by the buyer"
                                   onChange={e => this.handleInput(e)}/>
                        </div>
                    </form>
                    <div className="container-fluid navbar-right">
                        <p className="navbar-text">Show orders per page: </p>
                        <div className="btn-group" role="group" aria-label="...">
                            {ordersPerPageButtons}
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {filteredOrders.length !== 0 ?
                 <table className="table table-striped" style={{tableLayout: 'fixed'}}>
                     <thead>
                     <tr>
                         <th>Order Id</th>
                         <th>Bicycle</th>
                         <th>Buyer</th>
                         <th>Bicycle type</th>
                     </tr>
                     </thead>
                     <tbody>
                     {orderItemList.filter(
                         ord => ord.key <= (this.state.pageNumber * this.state.ordersPerPage - 1)
                                && ord.key >= (this.state.pageNumber - 1)
                                * this.state.ordersPerPage)}
                     </tbody>
                 </table> : <h3 className='empty-list'>
                     Nothing found that matches '{this.state.searchInput}'</h3>}
            </div>
            <nav aria-label="Page navigation">
                <div className='text-center'>
                    <ul className="pagination pagination-lg">
                        <li className={this.state.pageNumber === 1 ? 'disabled' : ''}>
                            <a onClick={this.state.pageNumber === 1 ? () => {
                            } : () => this.handlePageDirection(0)} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pages}
                        <li className={(this.state.pageNumber === pageCount || pageCount === 0)
                            ? 'disabled' : ''}>
                            <a onClick={this.state.pageNumber === pageCount ? () => {
                            } : () => this.handlePageDirection(1)} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    }

}

export default OrdersList;