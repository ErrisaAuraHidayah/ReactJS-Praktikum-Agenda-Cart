import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
        <div>
        <table class="table m-4">
        <thead class="table-info">
            <tr>
            
            <th scope="col">Nama</th>
            <th scope="col">Judul Buku</th>
            <th scope="col">Qty</th>
            <th scope="col">Harga(pcs)</th>
            <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th className="">{this.props.nama}</th>
            <td>{this.props.judul}</td>
            <td>{this.props.qty}</td>
            <td>{this.props.harga}</td>
            <td>
                <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit} data-target="#modal">
                    Edit
                </button>

                    {/* button untuk menghapus */}
                <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                    Hapus
                </button>
            </td>
            </tr>
            
        </tbody>
    </table>
</div>
    )
  }
}

export default Table
