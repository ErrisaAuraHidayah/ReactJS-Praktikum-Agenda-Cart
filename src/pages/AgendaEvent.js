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
        },
        {
          no: "2",
          judul : "Penanaman Kembali - Reboisasi",
          tanggal: "17 Oktober - 3 November 2022",
          keterangan : "Reboisasi adalah penanaman kembali hutan yang telah ditebang yang sudah tandus atau gundul. Dalam bahasa Inggris, reboisasi dikenal dengan reforestation. Cambridge Dictonary mendefinisikan reboisasi sebagai tindakan dari penanaman pohon pada daerah dari lahan yang telah kosong atau rusak. ",
          tanggalupdate : "Updated 10 days ago",
          gambar : "https://s.yimg.com/ny/api/res/1.2/ASh2UCybrelySTj2gvbwTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MTtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/S6mwXHsT4cQ2ws3peYaQOw--~B/aD0zNzk7dz02NzM7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/id/liputan6_hosted_772/8e2929ec5fb8e571a38894195993da82"
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
        keterangan: this.state.keterangan,
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
    $("#modal_agenda").hide()

    
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
          {this.state.event.map( (item, index) => (
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

        <div>
          <button class="bg-green-500 w-11/12 text-blue-50 rounded-lg py-2 px-4 ml-14 mt-3" onClick={ () => this.Add() }>Tambah</button>
        </div>
        
        {/* component modal sbg control manipulasi data */}
        <div className="modal" id="modal_agenda">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* modal header */}
              <div className="modal-header">
                Form Event
              </div>

              {/* modal body */}
              <div className="modal-body">
                <form onSubmit={ev => this.Save(ev) }>
                  Judul Event
                  <input type="text" className="form-control mb-2"
                  value={this.state.judul}
                  onChange={ ev => this.setState({judul: ev.target.value})}
                  required />

                  Tanggal 
                  <input type="text" className="form-control mb-2"
                  value={this.state.tanggal}
                  onChange={ ev => this.setState({tanggal: ev.target.value})}
                  required />

                  Keterangan
                  <input type="text" className="form-control mb-2"
                  value={this.state.keterangan}
                  onChange={ ev => this.setState({keterangan: ev.target.value})}
                  required />

                  Tanggal Update 
                  <input type="date" className="form-control mb-2"
                  value={this.state.tanggalupdate}
                  onChange={ ev => this.setState({tanggalupdate: ev.target.value})}
                  required />

                  File Gambar
                  <input type="text" className="form-control mb-2"
                  value={this.state.gambar}
                  onChange={ ev => this.setState({gambar: ev.target.value})}
                  required />

                  <button className="btn btn-info btn-block" type="submit">
                      Simpan
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

export default AgendaEvent
