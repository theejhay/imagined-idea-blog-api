import User from "../models/user.model.js";

interface CreateUserDTO {
  name: string;
  email: string;
  age: number;
}

class UserRepository {
  async create(data: CreateUserDTO) {
    return User.create(data);
  }

  async findAll() {
    return User.find();
  }

  async findById(id: string) {
    return User.findById(id);
  }
}

export default UserRepository;
