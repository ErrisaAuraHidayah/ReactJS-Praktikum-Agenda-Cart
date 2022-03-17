import React, { Component } from 'react'

class CardEvent extends Component {
  render() {
    return (
        <div class="bg-blue-200 py-5 flex-items-center justify-center rounded-lg">
          <div class="">
            <p class="text-center text-2xl font-bold">Event Memperingati Hari Lingkungan Hidup </p>
          </div>
          {/* card */}
          <div class="w-1/3 px-3 py-8">
            <div class="bg-white rounded-lg shadow-2xl ">
              {/* image */}
              <img src={this.props.gambar} class="rounded-t-lg h-60 w-full object-cover " />
              

              <div class="p-6">
                <h2 className="text-2xl font-bold font-sans">
                   {this.props.judul}
                </h2>
                <p class=" text-sm text-gray-500 mb-5">{this.props.tanggal}</p>
                <p class="text-justify">{this.props.keterangan}</p>

                <button class="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mr-2 ml-2" onClick={this.props.onEdit} data-target="#modal_event">Edit</button>
                <button class="bg-red-400 text-blue-50 rounded-lg py-2 px-4 mt-5"onClick={this.props.onDrop}>Hapus</button>
              </div>

              {/* footer */}
              <footer className="bg-gray-100 rounded-b-lg text-right py-3 px-8 text-sm text-gray-500">
                {this.props.tanggalupdate}

              </footer>
            </div>
          </div>
              <div>
                <button class="bg-green-500 w-11/12 text-blue-50 rounded-lg py-2 px-4 ml-14 ">Tambah</button>
              </div>
            
        </div>
        
        
    )
  }
}

export default CardEvent
