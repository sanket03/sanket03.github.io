import React from 'react';
import {Link} from 'react-scroll';

export default class CustomerFeedBackPatterns extends React.Component {
    constructor(props) {
        super(props);
        this.casestudyDetails = {
            'title': `Leading Worldwide Retail Chain Uses AI to Automate Customer Feedback, Reducing Costs and Improving Customer Satisfaction`,
            'summary': `A large retailer partners with MAQ Software to identify patterns in customer feedback as they return a computer product.`,  
            'scenario': [
                `Our client runs a worldwide chain of retail stores and an online shopping site. The client’s stores sell billions of dollars in first party products annually. Its retail locations provide a great shopping experience for premium computer products.`,
                `Our client needed to understand why customers were returning retail products. The client also needed to parse customer comments that were gathered in many languages in retail stores across the globe. If recurring patterns in the reasons for customer returns could be identified, the client could better address problems faced by the users of these products. The client would then be able to focus on specific areas where improvements were needed in the first party product.`,
                `Prior to working with MAQ Software, the client kept records of customer comments relating to returns but had not analyzed them for any patterns. MAQ Software worked with the client’s Marketing Operations team and used machine learning models to review the customer data for useful insights.`,
            ],
            'challenges': [
                `Develop return themes from a static list of predefined categories based on business requirements.`,
                `Detect typing errors and comments that need to be translated.`,
                `Identify and weigh the relative importance of each word in a comment.`
            ],
            'solution':[
                `MAQ Software collected and translated the comments using case statements in SQL, then further preprocessed using Python and R libraries. We then developed a web service to display a word tree map of client return themes.`,
                `MAQ Software imported the required data from the Azure server and selected the columns required for training the model. At the SQL level, we then preprocessed the translated data and categorized the comments into themes based on the rules identified by the business owner. Even after the categorization, there were many comments for which we could not identify themes. We categorized these comments manually to provide a rich data set for training the model.`,
                `Once the SQL preprocessing was done, we used Python libraries to clean the comments data. We developed a custom Python script that performed a spell check on the comments and corrected typographical errors. We also used auto-correct libraries based on words in a linked dictionary.`,
                `Next, we processed the corrected comments using the text preprocessing libraries in R to identify word frequency and remove words with very high and very low frequencies. We then calculated the term frequency-inverse document frequency (TF-IDF) of each word in the comment to determine the relative importance of each word in the comments.`,
                `We used the preprocessed data set to develop a training model. We split the dataset into a training dataset (used for training the model) and a validation dataset (used for scoring the training model). We used the Support Vector Machine Algorithms model for training purposes. The training was done based on the TF-IDF scores of the comments. We found that this model was able to identify most themes with better accuracy. The model was then finalized and deployed as a web service.`,
                `New return comments were sent to the web service, which allowed our client to see themes for the comments along with accuracy of prediction`
            ],
            'keyHighlights': [
                `Translated and categorized comments using case statements in SQL.`,
                `Developed a custom Python script to correct typing errors and create a new corrected comments column in dataset.`,
                `Used R libraries to calculate the frequency and importance of each word.`,
                `Used the Support Vector Machine Algorithms model to identify themes.`
            ],
            'outcome': [
                `Using MAQ Software’s return theme model, product managers were able to identify the top reasons for product returns. Customers were returning products because they found a lower price elsewhere or they were experiencing hardware failures.`,
                `The returns analysis allowed the client to focus on the specific areas in the pricing and product quality that were causing the most customer dissatisfaction. By pinpointing the problem-areas, the client was able to save thousands of man-hours and potentially millions of dollars by reducing manufacturing errors and refurbishment costs.`
            ],
            'outcomeHightlights': [
                `Identified the source of most component failures in hardware returns.`,
                `Identified customers’ primary non-hardware-related reasons for returning products.`,
                `Allowed client to focus on the areas where they could most effectively reduce customer returns.`
            ]
        }
        };
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    renderContent(content, start, end) {
        let element = content.splice(start, end).map((content, index)=>{
            return (
                <div key = {index}>{content}</div>
            )
        })
        return element;
    }


    renderList(content) {
        let element = content.map((content, index)=>{
            return (
                <li key = {index}>{content}</li>
            )
        })
        return element;
    }

    render() {
        let {
            title,
            summary,
            scenario,
            challenges,
            solution,
            keyHighlights,
            outcome,
            outcomeHightlights
            } = this.casestudyDetails;

        return (
                <div id = 'casestudy-container'>
                    <div id = 'casestudy-home'>
                        <div id = 'casestudy-home-content'>
                            <div id = 'casestudy-title'>
                                {title}
                            </div>
                            <div id = 'casestudy-summary'>
                                {summary}
                            </div>
                            <Link to = 'casestudy-scenario' smooth={true} duration={200}>
                                <button className = 'btn'>KNOW MORE</button>
                            </Link>
                        </div>
                        <div id = 'casestudy-home-image'>
                            <img src = '../../src/images/blog.png'/>
                        </div>
                    </div>

                    <div id = 'case-study-description-container'>
                        <div id = 'casestudy-scenario' className = 'image-desc-box'>
                            <div id = 'casestudy-scene-content-1' className = 'casestudy-content-1'>
                                <div className = 'title'>Business Case</div>
                                <div className = 'description'>{this.renderContent([...scenario],0,2)}</div>
                            </div>
                            <div id = 'casestudy-scene-content-2' className = 'casestudy-content-2'>
                                <div className = 'description'>{this.renderContent([...scenario],2,scenario.length)}</div>
                            </div>
                            <div id = 'casestudy-scene-image'  className = 'casestudy-box-image'>
                                <img src = '../../src/images/blog.png'/>
                            </div>
                        </div>

                        <div id = 'casestudy-challenges' className = 'casestudy-details'>
                            <div className = 'title'>Key Challenges</div>
                            <ul className = 'description'>{this.renderList(challenges)}</ul>
                        </div>

                        <div id = 'casestudy-solution' className = 'image-desc-box'>
                            <div id = 'casestudy-solution-content-1' className = 'casestudy-content-1'>
                                <div className = 'title'>Solution</div>
                                <div className = 'description'>{this.renderContent([...solution],0,2)}</div>
                            </div>
                            <div id = 'casestudy-solution-content-2' className = 'casestudy-content-2'>
                                <div className = 'description'>{this.renderContent([...solution],2,solution.length)}</div>
                            </div>
                            <div id = 'casestudy-solution-image' className = 'casestudy-box-image'>
                                <img src = '../../src/images/blog.png'/>
                            </div>
                        </div>

                        <div id = 'casestudy-key-highlights' className = 'casestudy-details'>
                            <div className = 'title'>Key Highlights</div>
                            <ul className = 'description'>{this.renderList(keyHighlights)}</ul>
                        </div>

                        <div id = 'casestudy-outcome' className = 'casestudy-details'>
                            <div className = 'title'>Business Outcome</div>
                            <div className = 'description'>{this.renderContent([...outcome],0,outcome.length)}</div>
                        </div>

                        <div id = 'casestudy-outcome-highlights' className = 'casestudy-details'>
                            <div className = 'title'>Outcome Highlights</div>
                            <ul className = 'description'>{this.renderList(outcomeHightlights)}</ul>
                        </div>
                    </div>
                </div>
            )
    }
}