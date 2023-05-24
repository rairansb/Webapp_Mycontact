const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
 async index(request, response){
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response){
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ erro: 'Name is required'});
    }

    const category = await CategoriesRepository.create({name});

    response.json(category);
  }

  async update(request, response){
    // Editar um registro
    const {id} = request.params;
    const { name } = request.body;

    const categoriestExists = await CategoriesRepository.findById(id);
    if (!categoriestExists) {
      return response.status(404).json({error:'User not found'})
    }

    if(!name){
      return response.status(400).json({error: 'Name is required'});
    }

    const categoriName = await CategoriesRepository.findByName(name);
  if (categoriName && categoriName.id !== id){
    return response.status(400).json({error: 'This name is already in use'});
  }

    const categories = await CategoriesRepository.update(id, {
      name
    });

    response.json(categories);
  }

  async delete(request, response){
    // Deletar um Registro
    const {id} = request.params;

     await CategoriesRepository.delete(id);
     // 204 No Content
     response.sendStatus(204);

  }
}

module.exports = new CategoryController();
