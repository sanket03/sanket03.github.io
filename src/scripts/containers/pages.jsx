import React from 'react';
import Categories from '../components/categories.jsx';
import Scroll from 'react-scroll';
import Slider from 'react-slick';
import {Collapse} from 'reactstrap';

import config from '../utilities/config';

export default class Pages extends React.Component {

    constructor(props) {
        super(props);

        // Carousel config
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

    // Render page content
    renderContent(content) {
        let element = content.map((content, index) => {
            return (
                <div key = {index}>{content}</div>
            )
            }
        )
        return element;
    }

    // Render Case Studies
    renderCaseStudies(title, caseStudies) {
        let element = caseStudies.map((caseStudy, index) => {
            return (
                        <div>
                            <Categories 
                                attributes = {caseStudy} 
                                key = {index} 
                                isCaseStudy = {true} 
                                taskTitle = {title}
                            />
                        </div>
                    )
        });
        return element;
    }

    // Toggle carousel
    toggleCarousel(title) {
        if(!this.state.collapse) {
            Scroll.scroller.scrollTo(`collapse-${title.toLowerCase()}`, {
                duration: 200,
                delay: 100,
                smooth: true
              });
        } 
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
        } = this.props.attributes;
        
        return (
            <div id = {title.toLowerCase()} className = 'page-container'>
                <div className = 'upper-container'>
                    <div className = 'content'>
                        <div className = 'title'>{title}</div>
                        <div className = 'description'>{this.renderContent(content)}</div>
                        { caseStudies.length > 0 ? (
                                                            <button className = 'btn' onClick = {this.toggleCarousel.bind(null,title)}>
                                                                {!this.state.collapse ? 'KNOW MORE' : 'SHOW LESS'}
                                                            </button>
                                                    ) : ''}
                    </div>
                    <img src = {imageUrl}/>
                </div>
                <div id = {`collapse-${title.toLowerCase()}`}>
                    <Collapse isOpen={this.state.collapse}>
                        <div id = {`carousel-${title.toLowerCase()}`} className = 'lower-carousel-container'>
                            <Slider {...this.carouselSettings}>
                                {this.renderCaseStudies(title, caseStudies)}
                            </Slider>
                        </div>
                    </Collapse>
                </div>
            </div>  
        );
    }
}