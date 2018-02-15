import React from 'react';
import allOrders from './data/orders';
import OrderItem from "./OrderItem";

class OrdersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: 1,
            pageActiveClass: [],
            searchInput: ''
        }

        this.handlePageClick = this.handlePageClick.bind(this)

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

        let pageCount = Math.ceil(filteredOrders.length / 3);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
                pages.push(
                    <li
                        key={i}
                        className={this.state.pageNumber === i ? 'active' : ''}>
                        <a
                            href={"#" + i}
                            onClick={() => this.handlePageClick(i)}>
                            {i}
                        </a>
                    </li>
                )
        }

        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search"
                                   onChange={e => this.handleInput(e)}/>
                        </div>
                    </form>
                    <p class="navbar-text">Show orders per page: </p>
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-default navbar-btn active">5</button>
                        <button type="button" class="btn btn-default navbar-btn">10</button>
                        <button type="button" class="btn btn-default navbar-btn">20</button>
                    </div>
                </div>
            </nav>
            <div>
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
                    {orderItemList.filter(ord => ord.key <= (this.state.pageNumber*3 - 1) && ord.key >= (this.state.pageNumber-1)*3)}
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={this.state.pageNumber === 1 ? 'disabled' : ''}>
                        <a href="#" onClick={this.state.pageNumber === 1 ? ()=>{} : () => this.handlePageDirection(0)} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages}
                    <li className={this.state.pageNumber === pageCount ? 'disabled' : ''}>
                        <a href="#" onClick={this.state.pageNumber === pageCount ? ()=>{} : () => this.handlePageDirection(1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    }

}

export default OrdersList;