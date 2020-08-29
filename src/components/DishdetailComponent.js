import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

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
        const option = {year: 'numeric', month: 'short', day: 'numeric' };
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;
    }

}

export default DishDetail