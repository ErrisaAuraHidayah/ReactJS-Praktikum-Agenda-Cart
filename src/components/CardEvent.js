import React, { Component } from 'react'

class CardEvent extends Component {
  render() {
    return (
          <div className="CardEvent flex">
            <div class="w px-3 py-8">
                <div class="bg-white rounded-lg shadow-2xl">
                    {/* image */}
                    <img src={this.props.gambar} class="rounded-t-lg h-80 w-full object-cover " />
                  

                    <div class="p-6 bg-gray">
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
                      Updated at {this.props.tanggalupdate}

                    </footer>
                </div>
            </div>
          </div>  
    )
  }
}

export default CardEvent
