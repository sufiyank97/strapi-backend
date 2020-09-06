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
	    if (data.name) {

      const category1=await strapi.query('podcast').findOne({id:data.id},['category', 'category.name'])
      
	    	const newData=`/${category1.category.name}/${slugify(data.name)}/`
	      data.slug = newData;
	    }
    },

    async beforeUpdate(params,data) {
     
      const category1=await strapi.query('podcast').findOne({id:data.id},['category', 'category.name'])
     
	    if (data.name) {
	    	const newData=`/${category1.category.name}/${slugify(data.name)}/`
	    	data.slug = newData;
	    }
    }
  
	}
};