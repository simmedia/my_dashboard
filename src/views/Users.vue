<template>
  <div class="users">
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 md8>
          <div v-for="(user,index) in users" :key="index" class="user-item">
            <div></div>
            {{user.name}}
            <br>
            {{user.email}}
            <v-icon @click="deleteUser(index)" id="dltUser">delete</v-icon>
            <v-icon @click="sayHello(user.id)" id="editUser">edit</v-icon>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <v-layout justify-center row wrap>
        <v-flex xs12 sm8 md6>
          <v-card color="white">
            <v-card-text class="px-0">
              <v-text-field
                color="green"
                id="inputName"
                type="text"
                placeholder="Enter name"
                v-model="uName"
              ></v-text-field>
              <v-text-field
                color="green"
                id="inputName"
                type="email"
                placeholder="Enter email"
                v-model="uEmail"
                @keyup.enter="addUser()"
              ></v-text-field>
            </v-card-text>

            <v-btn @click="addUser()" color="warning">Add User</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Users",
  data: () => ({
    uName: "",
    uEmail: "",
    users: [
      {
        id: 1,
        name: "Stefan",
        email: "simadurlan92@gmail.com"
      },
      {
        id: 2,
        name: "Petar",
        email: "pjersim@gmail.com"
      },
      {
        id: 3,
        name: "Milica",
        email: "milicica@gmail.com"
      }
    ]
  }),
  created() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
  },
  methods: {
    sayHello(id) {
      this.$router.push({ name: "User", params: { id: id } });
    },
    addUser() {
      if (this.uName && this.uEmail) {
        this.users.push({
          id: this.users.length + 1,
          name: this.uName,
          email: this.uEmail
        });
        this.uName = "";
        this.uEmail = "";
        document.getElementById("inputName").focus();
        localStorage.setItem("users", JSON.stringify(this.users));
      } else {
        alert("You must enter Name and Email please.");
      }
    },
    isExist: function() {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].name == this.uName) {
          alert("user alredy exist");
        }
      }
    },
    deleteUser(index) {
      const list = this.users;
      const newList = [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
      ];
      this.users = newList;
      localStorage.setItem("users", JSON.stringify(this.users));
    }
  }
};
</script>

<style lang="scss" scoped>
.users {
  list-style: none;
  margin: 0;
  padding: 20px 20px 100px 20px;

  .user-item {
    display: block;
    margin-bottom: 10px;
    box-shadow: 0 3px 2px 1px rgba(grey, 0.4);
    padding: 10px;
    transition: all 0.5s ease;
    position: relative;
    font-size: 1.2rem;
  }

  .user-item:last-of-type {
    margin-bottom: 30px;
  }

  input {
    border: 1px solid orange;
    margin: 5px;
    padding: 10px;
    height: 26px;
    z-index: 222;
  }
  button {
    background: red;
    color: #fff;
    height: 26px;
    padding: 0 20px;
    border: 1px solid red;
    margin-bottom: 20px;
  }
}

.v-card.v-sheet {
  padding: 0px 20px;
}

#dltUser,
#editUser {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #42b983;
  }
}

#editUser {
  right: 50px;
}
</style>

