// json2html.js
export default function json2html(data) {
    let html = '<table data-user="battu4262@gmail.com">';
    html += '<thead><tr>';
    Object.keys(data[0]).forEach(key => {
      html += `<th>${key}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';
    data.forEach(item => {
      html += '<tr>';
      Object.values(item).forEach(value => {
        html += `<td>${value}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody>';
    html += '</table>';
    return html;
  }
  