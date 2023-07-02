const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.formula1.com/en/results.html/2018/races.html';
const url2 = 'https://www.formula1.com/en/results.html/2018/races/999/abu-dhabi/race-result.html'
const url3 = 'https://www.formula1.com/en/results.html/2018/drivers.html';
const url4 = 'https://www.formula1.com/en/results.html/2018/team.html';
const url5 = 'https://www.formula1.com/en/results.html/2021/team/williams_mercedes.html';
const url6 = 'https://www.formula1.com/en/results.html/2022/drivers/GUAZHO01/guanyu-zhou.html';

const f1Data = [];

async function getHTML() {
    const { data: html } = await axios.get(url6);
    return html;
}

//Crawl Races data
// getHTML().then(res => {
//     const $ = cheerio.load(res);
//     $('.resultsarchive-table>tbody>tr').each((i, item) => {
//         const grandPrix = $(item).find('a').text().trim();
//         const date = $(item).find('.dark.hide-for-mobile').text();
//         const winner1 = $(item).find('span.hide-for-tablet').text();
//         const winner2 = $(item).find('span.hide-for-mobile').text();
//         const winner = winner1 + " " + winner2;
//         const car = $(item).find('.semi-bold').text();
//         const laps = $(item).find('.bold.hide-for-mobile').text();
//         const time = $(item).find('.dark.hide-for-tablet').text();
//         f1Data.push({
//             grandPrix,
//             date,
//             winner,
//             car,
//             laps,
//             time
//         })
//     })
//     fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
//         if (err) {
//             throw err;
//         }
//         console.log("file successfully saved!");
//     })
// })

//Crawl Grand Prix data
// getHTML().then(res => {
//     const $ = cheerio.load(res);
//     $('.resultsarchive-table>tbody>tr').each((i, item) => {
//         const pos = $(item).find('.limiter + .dark').text();
//         const no = $(item).find('.dark.hide-for-mobile').text();
//         const driver1 = $(item).find('span.hide-for-tablet').text();
//         const driver2 = $(item).find('span.hide-for-mobile').text();
//         const driver = driver1 + " " + driver2;
//         const car = $(item).find('.semi-bold').text();
//         const laps = $(item).find('.bold.hide-for-mobile').text();
//         const time = $(item).find('.bold.hide-for-mobile + .dark.bold').text();
//         const pts = $(item).find('.dark.bold + .bold').text();
//         f1Data.push({
//             pos,
//             no,
//             driver,
//             car,
//             laps,
//             time,
//             pts
//         })
//     })
//     fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
//         if (err) {
//             throw err;
//         }
//         console.log("file successfully saved!");
//     })
// })

//Crawl Drivers data
// getHTML().then(res => {
//     const $ = cheerio.load(res);
//     $('.resultsarchive-table>tbody>tr').each((i, item) => {
//         const pos = $(item).find('.limiter + .dark').text();
//         const driver1 = $(item).find('a > span.hide-for-tablet').text();
//         const driver2 = $(item).find('a > span.hide-for-mobile').text();
//         const driver = driver1 + " " + driver2;
//         const nationality = $(item).find('.dark.semi-bold.uppercase').text();
//         const car = $(item).find('a.grey').text();
//         const pts = $(item).find('.dark.bold').text().trim().match(/\d/g).join('');
//         f1Data.push({
//             pos,
//             driver,
//             nationality,
//             car,
//             pts
//         })
//     })
//     fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
//         if (err) {
//             throw err;
//         }
//         console.log("file successfully saved!");
//     })
// })

//Crawl Driver Achievement data
getHTML().then(res => {
    const $ = cheerio.load(res);
    $('.resultsarchive-table>tbody>tr').each((i, item) => {
        const grandPrix = $(item).find('a.dark.ArchiveLink').text();
        const date = $(item).find('.dark.bold').text().slice(0, 11);
        const car = $(item).find('a.grey').text();
        let racePos = $(item).find('.dark').text();
        const pts = $(item).find('.dark.bold').text().replace(date, '');
        racePos = racePos.replace(grandPrix, '');
        racePos = racePos.replace(date, '');
        racePos = racePos.replace(pts, '');
        f1Data.push({
            grandPrix,
            date,
            car,
            racePos,
            pts
        })
    })
    fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
        if (err) {
            throw err;
        }
        console.log("file successfully saved!");
    })
})

//Crawl Teams data
// getHTML().then(res => {
//     const $ = cheerio.load(res);
//     $('.resultsarchive-table>tbody>tr').each((i, item) => {
//         const pos = $(item).find('.limiter + .dark').text();
//         const team = $(item).find('a').text();
//         const pts = $(item).find('.dark.bold').text().replace(team, '');
//         f1Data.push({
//             pos,
//             team,
//             pts
//         })
//     })
//     fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
//         if (err) {
//             throw err;
//         }
//         console.log("file successfully saved!");
//     })
// })

//Crawl Team grand prix data
// getHTML().then(res => {
//     const $ = cheerio.load(res);
//     $('.resultsarchive-table>tbody>tr').each((i, item) => {
//         const grandPrix = $(item).find('a').text();
//         let date = $(item).find('.dark.bold').text().slice(0, 11);
//         let pts = $(item).find('.dark.bold').text().replace(date, '');
//         f1Data.push({
//             grandPrix,
//             date,
//             pts
//         })
//     })
//     fs.writeFile('f1Data.json', JSON.stringify(f1Data), err => {
//         if (err) {
//             throw err;
//         }
//         console.log("file successfully saved!");
//     })
// })