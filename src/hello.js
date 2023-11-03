import _ from 'lodash';

const mahasiswa = [
    { nama: 'Hanif', email: 'hanif@gmail.com', jurusan: 'Teknik Informatika' },
    { nama: 'Hanif2', email: 'hanif2@gmail.com', jurusan: 'Teknik Informatika' },
    { nama: 'Hanif3', email: 'hanif3@gmail.com', jurusan: 'Teknik Informatika' },
];

const mhs = _.find(mahasiswa, { nama: 'Hanif2' });
console.log(mhs);