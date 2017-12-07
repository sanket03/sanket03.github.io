import React from 'react';
import Categories from '../components/categories.jsx';
import {Link} from 'react-scroll';
import Slider from 'react-slick';
import {Collapse} from 'reactstrap';

import config from '../utilities/config';

export default class Pages extends React.Component {

    constructor(props) {
        super(props);

        this.carouselSettings = {
                responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } }, 
                            ],
                dots: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false
            }
        
        this.renderCaseStudies = this.renderCaseStudies.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.toggleCarousel = this.toggleCarousel.bind(this);

        // Set initial state
        this.state = { collapse: false };
    }

    renderContent(content) {
        let element = content.map((content, index) => {
            return (
                <div key = {index}>{content}</div>
            )
            }
        )
        return element;
    }

    renderCaseStudies(title, caseStudies) {
        let element = caseStudies.map((caseStudy, index) => {
            return (
                        <div>
                            <Categories 
                                attributes = {caseStudy} 
                                index = {index} 
                                isCaseStudy = {true} 
                                taskTitle = {title}
                            />
                        </div>
                    )
        });
        return element;
    }

    toggleCarousel() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        let {
            title,
            content,
            imageUrl,
            caseStudies
        } = this.props.attributes,
        index = this.props.index;

        return (
            <div id = {title.toLowerCase()} className = 'page-container'>
                <div className = 'upper-container'>
                    <div className = 'content'>
                        <div className = 'title'>{title}</div>
                        <div className = 'description'>{this.renderContent(content)}</div>
                        { caseStudies.length > 0 ? (
                                                        <button className = 'btn' onClick = {this.toggleCarousel}>KNOW MORE</button>
                                                    ) : ''}
                    </div>
                    <img src = {imageUrl}/>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <div id = {`carousel-${title.toLowerCase()}`} className = 'lower-carousel-container'>
                        <Slider {...this.carouselSettings}>
                            {this.renderCaseStudies(title, caseStudies)}
                        </Slider>
                    </div>
                </Collapse>
            </div>  
        );
    }
}