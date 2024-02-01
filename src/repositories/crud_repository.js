class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.error("Error in CrudRepository.create:", error);
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            if (!response) {
                console.error("Resource not found in CrudRepository.destroy");
                return null;
            }
            return response;
        } catch (error) {
            console.error("Error in CrudRepository.destroy:", error);
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            if (!response) {
                console.error("Resource not found in CrudRepository.get");
                return null;
            }
            return response;
        } catch (error) {
            console.error("Error in CrudRepository.get:", error);
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.error("Error in CrudRepository.getAll:", error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, { new: true });
            if (!response) {
                console.error("Resource not found in CrudRepository.update");
                return null;
            }
            return response;
        } catch (error) {
            console.error("Error in CrudRepository.update:", error);
            throw error;
        }
    }
}

module.exports = CrudRepository;