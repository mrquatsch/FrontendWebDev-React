import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
    Label, Breadcrumb, BreadcrumbItem, Col, Row, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <React.Fragment>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </React.Fragment>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function RenderComments({comments}) {
        if(comments != null) {
            console.log(comments)
            const commentsMap = comments.map(comment =>  {
                return (
                    <React.Fragment>
                        <li>{comment.comment}</li><br />
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                        </p>
                    </React.Fragment>
                )
            })
            return (
                <React.Fragment>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {commentsMap}
                    </ul>
                </React.Fragment>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function CommentForm() {
        return (
            <React.Fragment>
                <Button outline>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                {/* <CommentModal /> */}
            </React.Fragment>
        )
    }

    function CommentModal() {
        return (
            <div className="col-12 col-md-9">
                <LocalForm>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select model=".rating" name="rating"
                                className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="yourname" md={2}>Your Name</Label>
                        <Col md={10}>
                            <Control.text model=".yourname" id="yourname" name="yourname"
                                placeholder="Your Name"
                                className="form-control"
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={2}>Comment</Label>
                        <Col md={10}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                rows="6"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            <Button type="submit" color="primary">
                            Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        )
    }

    const  DishDetail = (props) => {
        const dish = props.dish
        if (dish != null && dish !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1" name="dishDetail">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1" name="DishComment">
                            <RenderComments comments={props.comments} />
                            <CommentForm />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }

export default DishDetail