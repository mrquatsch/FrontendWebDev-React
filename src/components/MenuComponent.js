import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount() {
      console.log('Menu Component componentDidMount is invoked')
    }

    renderDish(dish) {
      if(dish != null)
        return(
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      else
        return (
          <div></div>
        );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log('Menu Component render is invoked')

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
          </div>
        );
    }
}

export default Menu;