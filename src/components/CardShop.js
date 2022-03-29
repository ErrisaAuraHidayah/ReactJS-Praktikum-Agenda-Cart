import React, { Component } from 'react'

class CardShop extends Component {
  render() {
    return (
        <div>
        
        <div class="">
          <div class="shadow-lg ">
            <img src={this.props.gambar} class="rounded-t-lg h-80 w-full object-cover shadow-lg"/>
          <div class="p-3">
            
            <h2 class="text-2xl font-bold font-sans">{this.props.nama}</h2>
            <p class="text-xl text-gray-500 ">Rp {this.props.harga}</p>

            <button class="bg-blue-400 text-blue-50 rounded-lg py-2 px-3 mt-3" onClick={this.props.onEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            
            </button>
            <button class="bg-red-400 text-blue-50 rounded-lg py-2 px-3 mt-3 ml-2"  onClick={this.props.onDrop}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
              </button>
            <button class="bg-gray-400 text-blue-50 rounded-lg py-2 px-3 mt-2 " onClick={this.props.onCart}>
             Tambah ke keranjang</button>
          </div>

          </div>
          

        </div>
      </div>

    )
  }
}

export default CardShop;
