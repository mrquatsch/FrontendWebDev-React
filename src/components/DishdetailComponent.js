import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
        if(comments != null) {
            const commentsMap = comments.map(comment =>  {
                return (
                    <React.Fragment>
                        <li>{comment.comment}</li><br />
                        <li>-- {comment.author}, {FormatDate(comment.date)}</li><br />
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

    const  DishDetail = (props) => {
        const dish = props.dish
        if (dish != null) {
            return (
                <div className="container">
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    function FormatDate(date) {
        const format = {year: 'numeric', month: 'short', day: '2-digit' };
        const parsedDate = new Date(Date.parse(date))
        const newdate = Intl.DateTimeFormat("en-US", format).format(parsedDate)
        return newdate;
    }

export default DishDetail