const config = {};

// ML task categories
config.taskCategories = {
    'Predict Values': {
        bgImage: '../../src/images/tile1.png',
        data:'Predict values'
    }, 
    'Unusual Occurances':{
        bgImage: '../../src/images/tile2.png',
        data: 'Unusual Occurances'
    }, 
    'Discover Structure': {
        bgImage:'../../src/images/tile3.png',
        data:'Discover Structure'
    },
    
    'Predict Between Two Categories': {
        bgImage: '../../src/images/tile4.png',
        data:'Predict Between Two Categories'
    },

    'Predict Between Several Categories': {
        bgImage: '../../src/images/tile5.png',
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