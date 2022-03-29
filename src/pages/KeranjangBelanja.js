import React, { Component } from 'react'
import CardShop from '../components/CardShop'
import $ from 'jquery'

 class KeranjangBelanja extends Component {

  constructor(){
    super()
    this.state = {
      baju : [
        {
          no : "111",
          nama : "Linen Shirt",
          harga : "399000 ",
          gambar : "https://static.zara.net/photos///2022/V/0/1/p/4786/078/251/2/w/437/4786078251_1_1_1.jpg?ts=1645718784483"
        },
        {
          no : "112",
          nama : "Bluse Pumeti",
          harga : "579000 ",
          gambar : "https://static.zara.net/photos///2022/V/0/1/p/0975/043/613/2/w/1920/0975043613_1_1_1.jpg?ts=1645013206599"
        },
        {
          no : "113",
          nama : "Kemeja Oversize",
          harga : "200000 ",
          gambar : "https://static.zara.net/photos///2022/V/0/1/p/3067/472/718/2/w/750/3067472718_15_3_1.jpg?ts=1643809030079"
        },
        {
          no : "114",
          nama : "Kemeja Linen Saku",
          harga : "259000 ",
          gambar : "https://static.zara.net/photos///2022/V/0/1/p/4043/075/526/2/w/750/4043075526_2_1_1.jpg?ts=1647364376933"
        },
        {
          no : "115",
          nama : "Top Rimpel",
          harga : "459000 ",
          gambar : "https://static.zara.net/photos///2022/V/0/1/p/2717/144/330/2/w/750/2717144330_1_1_1.jpg?ts=1645014025244"
        }


      ],
      
      action: "",
      no: "",
      nama: "",
      harga: "",
      gambar: "",
      selectedItem: null
    }
  }

  //ini fungsi untuk menambah
  Add = () => {
    //menampilkan komponen modal
    $("#modal_baju").show()
    this.setState({
      no: Math.random(1, 10000000),
      nama : "",
      harga: "",
      gambar: "",
      action : "insert"
    })
  }

  //ini fungsi untuk edit
  Edit = (item) => {
    $("#modal_baju").show()
    this.setState ({
      no : item.no,
      nama: item.nama,
      harga: item.harga,
      gambar: item.gambar,
      action: "update",
      selectedItem: item

    })
  }

  //ini buat menyimpan perubahan data
  Save = (event) => {
    event.preventDefault();
    let tempBaju = this.state.baju

    if(this.state.action === "insert"){
      tempBaju.push({
        no: this.state.no,
        nama: this.state.nama,
        harga: this.state.harga,
        gambar: this.state.harga,
      })
    }else if(this.state.action === "update"){
      let index = tempBaju.indexOf(this.state.selectedItem)
      tempBaju[index].no = this.state.no
      tempBaju[index].nama = this.state.nama
      tempBaju[index].harga = this.state.harga
      tempBaju[index].gambar = this.state.gambar
    }

    this.setState({baju : tempBaju})

    $("#modal_baju").hide()
  }

  //ini untuk menghapus
  Drop = (item) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
      let tempBaju = this.state.baju

      let index = tempBaju.indexOf(item)

      tempBaju.splice(index, 1)

      this.setState({baju:tempBaju})
    }
  }

  setUser = () => {
    if(localStorage.getItem("user") === null){
      let prompt = window.prompt("Masukkan Nama Anda", "")
      if(prompt === null || prompt === ""){
        this.setUser()
      }else{
        localStorage.setItem("user", prompt)
        this.setState({user: prompt})
      }

    }else{
      let name = localStorage.getItem("user")
      this.setState({user: name})
    }
  }

  componentDidMount(){
    this.setUser()
  }

  addToCart = (selectedItem) => {
    let tempCart = []

    if(localStorage.getItem("cart") !== null){
      tempCart = JSON.parse(localStorage.getItem("cart"))
    }

    let existItem = tempCart.find(item => item.no === selectedItem.no)

    if(existItem){
      window.alert("Anda telah memilih item ini")

    }else{
      let promptJumlah = window.prompt("Masukkan jumlah item yang beli", "")

      if(promptJumlah !== null && promptJumlah !== ""){
        selectedItem.jumlahBeli = promptJumlah
        tempCart.push(selectedItem)
        localStorage.setItem("cart", JSON.stringify(tempCart))

      }
    }
  }

  Close = () => {
    $("#modal_baju").hide()
}

  render() {
    return (
      
      <div className="container">
        <h4 className="text-primary my-2">
          Nama Pengguna: {this.state.user}
        </h4>

        <div class="flex flex-row justify-between">
          <h2 class="text-3xl">Women's Collection</h2>
          <button class="text-xl no-underline flex flex-row bg-red-400 text-blue-50 rounded-lg py-2 px-3 mt-3 ml-2" onClick={() => this.Add()}>
          Tambah
          </button>
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-10 mt-3">
          {this.state.baju.map( (item,index) => (
            <CardShop
            nama={item.nama}
            harga={item.harga}
            gambar={item.gambar}
            onEdit={ () => this.Edit(item)}
            onDrop={ () => this.Drop(item)}
            onCart={() => this.addToCart(item)}
            />
          ))}
        </div>
        

        {/* component modal sbg control manipulasi data */}
        <div className="modal" id="modal_baju">
          <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              Form baju
            </div>

            <div className="modal-body">
              <form onSubmit={ev => this.Save(ev)}>
              Nama Barang
              <input type="text" className="form-control mb-2"
              value={this.state.nama}
              onChange={ ev => this.setState({nama: ev.target.value}) }
              required />

              Harga Barang
              <input type="text" className="form-control mb-2"
              value={this.state.harga}
              onChange={ ev => this.setState({harga: ev.target.value}) }
              required />

              Gambar Barang
              <input type="text" className="form-control mb-2"
              value={this.state.gambar}
              onChange={ ev => this.setState({gambar: ev.target.value}) }
              required />

              <button className="btn btn-info btn-block" type="submit">
                Simpan
              </button>
              <button type="button" className="btn btn-danger btn-block ml-1" data-dismiss="modal" onClick={() => this.Close()}>
                Close
              </button>

              </form>

            </div>

          </div>

        </div>
        </div>
      </div>
      
    )
  }
}

export default KeranjangBelanja
