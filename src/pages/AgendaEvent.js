import React, { Component } from 'react'
import CardEvent from '../components/CardEvent'
import $ from 'jquery';

class AgendaEvent extends Component {
  constructor(){
    super()
    this.state = {
      event : [
        {
          no: "1",
          judul : "Gerakan Go Green",
          tanggal: "12 November 2022 - 30 November 2022",
          keterangan : "Aksi go green merupakan salah satu upaya manusia untuk merawat bumi supaya kembali baik dan nyaman ditinggali. Ini adalah wujud kesadaran dan kepedulian manusia terhadap alam. Dengan cara-cara yang mudah diterapkan, go green diharapkan dapat berdampak positif pada kondisi bumi. ",
          tanggalupdate : "Updated 3 days ago",
          gambar : "https://rmibogor.id/wp-content/uploads/2019/09/IMG_0832-300x200.jpg"
        }
      ],

      action: "",
      no: "",
      judul: "",
      tanggal: "",
      keterangan: "",
      tanggalupdate: "",
      gambar: "",
      selectedItem: null
    }

  }

  //ini fungsi untuk menambah
  Add = () => {
    //menampilkan komponen modal
    $("#modal_agenda").show()
    this.setState({
      no: Math.random(1, 1000000),
      judul: "",
      tanggal: "",
      keterangan: "",
      tanggalupdate: "",
      gambar: "",
      action: "insert"
    })
  }

  //ini fungsi untuk edit
  Edit = (item) => {
    $("#modal_agenda").show()
    this.setState({
      no: item.no,
      judul: item.judul,
      tanggal: item.tanggal,
      keterangan: item.keterangan,
      tanggalupdate: item.tanggalupdate,
      gambar: item.gambar,
      action: "update",
      selectedItem: item
    })
  }

  //ini buat untuk menyimpan perubahan data
  Save = (event) => {
    event.preventDefault();
    //menampung data state buku
    let tempEvent = this.state.event

    if(this.state.action === "insert"){
      //menambah data baru
      tempEvent.push({
        no: this.state.no,
        judul: this.state.judul,
        tanggal: this.state.tanggal,
        keterangan: this.state.tanggal,
        tanggalupdate: this.state.tanggalupdate,
        gambar: this.state.gambar

      })
    }else if(this.state.action === "update"){
      //menyimpan perubahan data
      let index = tempEvent.indexOf(this.state.selectedItem)

      tempEvent[index].no = this.state.no
      tempEvent[index].judul = this.state.judul
      tempEvent[index].tanggal = this.state.tanggal
      tempEvent[index].keterangan = this.state.keterangan
      tempEvent[index].tanggalupdate = this.state.tanggalupdate
      tempEvent[index].gambar = this.state.gambar
    }

    this.setState({event : tempEvent})

    //menutup komponen modal_event
    $("#modal_event").hide()

    
  }

  //ini untuk menghapus event didalam array
  Drop = (item) => {
    //beri confirm
    if(window.confirm("Apakah anda ingin menghapus data ini?")){
      let tempEvent = this.state.event
      let index = tempEvent.indexOf(item)

      tempEvent.splice(index, 1)

      this.setState({event: tempEvent})
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.map( (item, index) => (
            <CardEvent
              judul={item.judul}
              tanggal = {item.tanggal}
              keterangan = {item.keterangan}
              tanggalupdate = {item.tanggalupdate}
              gambar = {item.gambar}
              onEdit={ () => this.Edit(item)}
              onDrop={ () => this.Drop(item)}

            />
          ))}

        </div>

      </div>
    )
  }
}

export default AgendaEvent
