const config = {};

// ML task categories
config.taskCategories = {
    'Predict values': {
        bgImage: '../../images/tile1.png',
        data:'Predict values'
    }, 
    'Unusual Occurances':{
        bgImage: '../../images/tile2.png',
        data: 'Unusual Occurances'
    }, 
    'Discover Structure': {
        bgImage:'../../images/tile3.png',
        data:'Discover Structure'
    },
    
    'Predict Between Two Categories': {
        bgImage: '../../images/tile4.png',
        data:'Predict Between Two Categories'
    },

    'Predict Between Several Categories': {
        bgImage: '../../images/tile5.png',
        data: 'Predict Between Several Categories'
    }
};

// ML Algorithm options

config.algorithmCategories = {   
        'Regression' : [
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            },
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            },
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            },
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            },
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            },
            {
                name: 'Ordinal Regression',
                description: 'Data in rank ordered categories',
                example:'',
                explore:''
            }
        ]
}

export default config;