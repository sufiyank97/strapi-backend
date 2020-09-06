'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify');
// module.exports = {
// 	beforeSave: async model => {
// 		console.log(model.name)
//     if (model.name) {
//     	const data=`/${model.category.name}/${slugify(model.name)}/`
//       model.slug = data;
//     }
//   },
//   beforeUpdate: async model => {
//   	console.log(model.name,'nn')
//     if (model.getUpdate() && model.getUpdate().name) {
//     	const data=`/${model.category.name}/${slugify(model.getUpdate().name)}/`
//     	console.log(data)
//       model.update({
//         slug: data,
//       });
//     }
//   },
// };

module.exports = {
	lifecycles: {
 
  async beforeCreate(data) {
  	
	    if (data.name && data.category) {
	    	
      const category1=await strapi.query('category').findOne({id:data.category})
      
	    	const newData=`/${category1.name}/${slugify(data.name)}/`
	      data.slug = newData;
	    }else{
	    	throw new Error('Enter category')
	    }
    },

    async beforeUpdate(params,data) {
     console.log("before update")
      const category1=await strapi.query('category').findOne({id:data.category})
     
	    if (data.name) {
	    	const newData=`/${category1.name}/${slugify(data.name)}/`
	    	data.slug = newData;
	    }
    }
  
	}
};