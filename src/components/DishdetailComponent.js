import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail Component componentDidMount is invoked')
    }

    componentDidUpdate() {
        console.log('DishDetail DidUpdate invoked')
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if(comments != null) {
            const commentsMap = comments.map(comment =>  {
                return (
                    <React.Fragment>
                        <li>{comment.comment}</li><br />
                        <li>-- {comment.author}, {this.formatDate(comment.date)}</li><br />
                    </React.Fragment>
                )
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentsMap}
                    </ul>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    render() {
        console.log('DishDetail render() invoked')
        const dish = this.props.dish
        if (dish != null) {
            const dishItem = this.renderDish(dish)
            const commentItem = this.renderComments(dish.comments)
            // const commentItem = this.renderComments(dish)
            return (
                <div className='row'>
                    {dishItem}
                    {commentItem}
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    formatDate(date) {
        const format = {year: 'numeric', month: 'short', day: '2-digit' };
        const parsedDate = new Date(Date.parse(date))
        const newdate = Intl.DateTimeFormat("en-US", format).format(parsedDate)
        return newdate;
    }

}

export default DishDetail