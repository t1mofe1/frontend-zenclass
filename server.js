const express = require('express');
const app = express();

app.use(require('compression')());
app.use(require('cors')());
app.use(require('helmet')());

app.set('json spaces', 2);

const STATES = {
	COMPLETED: '2',
	DEVELOPMENT: '1',
	NOT_STARTED: '0',
};

const config = {
	1: { github: 'https://github.com/t1mofe1/frontend-zenclass/tree/main/public/1', state: STATES.COMPLETED },
	2: { github: 'https://github.com/t1mofe1/frontend-zenclass/tree/main/public/2', state: STATES.COMPLETED },
	3: { github: '', state: STATES.NOT_STARTED },
	4: { github: '', state: STATES.NOT_STARTED },
	5: { github: '', state: STATES.NOT_STARTED },
	6: { github: '', state: STATES.NOT_STARTED },
	7: { github: '', state: STATES.NOT_STARTED },
	8: { github: '', state: STATES.NOT_STARTED },
	9: { github: '', state: STATES.NOT_STARTED },
	10: { github: '', state: STATES.NOT_STARTED },
	11: { github: '', state: STATES.NOT_STARTED },
	12: { github: '', state: STATES.NOT_STARTED },
	13: { github: '', state: STATES.NOT_STARTED },
	14: { github: '', state: STATES.NOT_STARTED },
	15: { github: '', state: STATES.NOT_STARTED },
};

app.get('/api/lessons', async (req, res) => {
	res.status(200).send(config);
});

app.get('/', async (req, res) => {
	res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/:lesson/', async (req, res, next) => {
	if (config[req.params.lesson] === STATES.DEVELOPMENT) {
		if (req.query.force !== '1') {
			res.status(403).send(`You're don't have permissions to see that content!`);
		} else next();
	} else {
		if (config[req.params.lesson] === STATES.NOT_STARTED) {
			res.status(400).send(`This lesson is not started already!`);
		} else next();
	}
});

app.use(express.static('public'));

app.use(async (req, res, next) => {
	res.status(404).send(`<pre>
       444444444       000000000            444444444                             NNNNNNNN        NNNNNNNN     OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT     FFFFFFFFFFFFFFFFFFFFFF     OOOOOOOOO     UUUUUUUU     UUUUUUUUNNNNNNNN        NNNNNNNNDDDDDDDDDDDDD        
      4::::::::4     00:::::::::00         4::::::::4                             N:::::::N       N::::::N   OO:::::::::OO   T:::::::::::::::::::::T     F::::::::::::::::::::F   OO:::::::::OO   U::::::U     U::::::UN:::::::N       N::::::ND::::::::::::DDD     
     4:::::::::4   00:::::::::::::00      4:::::::::4                             N::::::::N      N::::::N OO:::::::::::::OO T:::::::::::::::::::::T     F::::::::::::::::::::F OO:::::::::::::OO U::::::U     U::::::UN::::::::N      N::::::ND:::::::::::::::DD   
    4::::44::::4  0:::::::000:::::::0    4::::44::::4                             N:::::::::N     N::::::NO:::::::OOO:::::::OT:::::TT:::::::TT:::::T     FF::::::FFFFFFFFF::::FO:::::::OOO:::::::OUU:::::U     U:::::UUN:::::::::N     N::::::NDDD:::::DDDDD:::::D  
   4::::4 4::::4  0::::::0   0::::::0   4::::4 4::::4                             N::::::::::N    N::::::NO::::::O   O::::::OTTTTTT  T:::::T  TTTTTT       F:::::F       FFFFFFO::::::O   O::::::O U:::::U     U:::::U N::::::::::N    N::::::N  D:::::D    D:::::D 
  4::::4  4::::4  0:::::0     0:::::0  4::::4  4::::4                             N:::::::::::N   N::::::NO:::::O     O:::::O        T:::::T               F:::::F             O:::::O     O:::::O U:::::D     D:::::U N:::::::::::N   N::::::N  D:::::D     D:::::D
 4::::4   4::::4  0:::::0     0:::::0 4::::4   4::::4                             N:::::::N::::N  N::::::NO:::::O     O:::::O        T:::::T               F::::::FFFFFFFFFF   O:::::O     O:::::O U:::::D     D:::::U N:::::::N::::N  N::::::N  D:::::D     D:::::D
4::::444444::::4440:::::0 000 0:::::04::::444444::::444      ---------------      N::::::N N::::N N::::::NO:::::O     O:::::O        T:::::T               F:::::::::::::::F   O:::::O     O:::::O U:::::D     D:::::U N::::::N N::::N N::::::N  D:::::D     D:::::D
4::::::::::::::::40:::::0 000 0:::::04::::::::::::::::4      -:::::::::::::-      N::::::N  N::::N:::::::NO:::::O     O:::::O        T:::::T               F:::::::::::::::F   O:::::O     O:::::O U:::::D     D:::::U N::::::N  N::::N:::::::N  D:::::D     D:::::D
4444444444:::::4440:::::0     0:::::04444444444:::::444      ---------------      N::::::N   N:::::::::::NO:::::O     O:::::O        T:::::T               F::::::FFFFFFFFFF   O:::::O     O:::::O U:::::D     D:::::U N::::::N   N:::::::::::N  D:::::D     D:::::D
          4::::4  0:::::0     0:::::0          4::::4                             N::::::N    N::::::::::NO:::::O     O:::::O        T:::::T               F:::::F             O:::::O     O:::::O U:::::D     D:::::U N::::::N    N::::::::::N  D:::::D     D:::::D
          4::::4  0::::::0   0::::::0          4::::4                             N::::::N     N:::::::::NO::::::O   O::::::O        T:::::T               F:::::F             O::::::O   O::::::O U::::::U   U::::::U N::::::N     N:::::::::N  D:::::D    D:::::D 
          4::::4  0:::::::000:::::::0          4::::4                             N::::::N      N::::::::NO:::::::OOO:::::::O      TT:::::::TT           FF:::::::FF           O:::::::OOO:::::::O U:::::::UUU:::::::U N::::::N      N::::::::NDDD:::::DDDDD:::::D  
        44::::::44 00:::::::::::::00         44::::::44                           N::::::N       N:::::::N OO:::::::::::::OO       T:::::::::T           F::::::::FF            OO:::::::::::::OO   UU:::::::::::::UU  N::::::N       N:::::::ND:::::::::::::::DD   
        4::::::::4   00:::::::::00           4::::::::4                           N::::::N        N::::::N   OO:::::::::OO         T:::::::::T           F::::::::FF              OO:::::::::OO       UU:::::::::UU    N::::::N        N::::::ND::::::::::::DDD     
        4444444444     000000000             4444444444                           NNNNNNNN         NNNNNNN     OOOOOOOOO           TTTTTTTTTTT           FFFFFFFFFFF                OOOOOOOOO           UUUUUUUUU      NNNNNNNN         NNNNNNNDDDDDDDDDDDDD        </pre>`);
});

app.use(async (err, req, res, next) => {
	console.log(err);
	res.status(500).send(`<pre>
     SSSSSSSSSSSSSSS EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR   VVVVVVVV           VVVVVVVVEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR        EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR   RRRRRRRRRRRRRRRRR        OOOOOOOOO     RRRRRRRRRRRRRRRRR   
 SS:::::::::::::::SE::::::::::::::::::::ER::::::::::::::::R  V::::::V           V::::::VE::::::::::::::::::::ER::::::::::::::::R       E::::::::::::::::::::ER::::::::::::::::R  R::::::::::::::::R     OO:::::::::OO   R::::::::::::::::R  
S:::::SSSSSS::::::SE::::::::::::::::::::ER::::::RRRRRR:::::R V::::::V           V::::::VE::::::::::::::::::::ER::::::RRRRRR:::::R      E::::::::::::::::::::ER::::::RRRRRR:::::R R::::::RRRRRR:::::R  OO:::::::::::::OO R::::::RRRRRR:::::R 
S:::::S     SSSSSSSEE::::::EEEEEEEEE::::ERR:::::R     R:::::RV::::::V           V::::::VEE::::::EEEEEEEEE::::ERR:::::R     R:::::R     EE::::::EEEEEEEEE::::ERR:::::R     R:::::RRR:::::R     R:::::RO:::::::OOO:::::::ORR:::::R     R:::::R
S:::::S              E:::::E       EEEEEE  R::::R     R:::::R V:::::V           V:::::V   E:::::E       EEEEEE  R::::R     R:::::R       E:::::E       EEEEEE  R::::R     R:::::R  R::::R     R:::::RO::::::O   O::::::O  R::::R     R:::::R
S:::::S              E:::::E               R::::R     R:::::R  V:::::V         V:::::V    E:::::E               R::::R     R:::::R       E:::::E               R::::R     R:::::R  R::::R     R:::::RO:::::O     O:::::O  R::::R     R:::::R
 S::::SSSS           E::::::EEEEEEEEEE     R::::RRRRRR:::::R    V:::::V       V:::::V     E::::::EEEEEEEEEE     R::::RRRRRR:::::R        E::::::EEEEEEEEEE     R::::RRRRRR:::::R   R::::RRRRRR:::::R O:::::O     O:::::O  R::::RRRRRR:::::R 
  SS::::::SSSSS      E:::::::::::::::E     R:::::::::::::RR      V:::::V     V:::::V      E:::::::::::::::E     R:::::::::::::RR         E:::::::::::::::E     R:::::::::::::RR    R:::::::::::::RR  O:::::O     O:::::O  R:::::::::::::RR  
    SSS::::::::SS    E:::::::::::::::E     R::::RRRRRR:::::R      V:::::V   V:::::V       E:::::::::::::::E     R::::RRRRRR:::::R        E:::::::::::::::E     R::::RRRRRR:::::R   R::::RRRRRR:::::R O:::::O     O:::::O  R::::RRRRRR:::::R 
       SSSSSS::::S   E::::::EEEEEEEEEE     R::::R     R:::::R      V:::::V V:::::V        E::::::EEEEEEEEEE     R::::R     R:::::R       E::::::EEEEEEEEEE     R::::R     R:::::R  R::::R     R:::::RO:::::O     O:::::O  R::::R     R:::::R
            S:::::S  E:::::E               R::::R     R:::::R       V:::::V:::::V         E:::::E               R::::R     R:::::R       E:::::E               R::::R     R:::::R  R::::R     R:::::RO:::::O     O:::::O  R::::R     R:::::R
            S:::::S  E:::::E       EEEEEE  R::::R     R:::::R        V:::::::::V          E:::::E       EEEEEE  R::::R     R:::::R       E:::::E       EEEEEE  R::::R     R:::::R  R::::R     R:::::RO::::::O   O::::::O  R::::R     R:::::R
SSSSSSS     S:::::SEE::::::EEEEEEEE:::::ERR:::::R     R:::::R         V:::::::V         EE::::::EEEEEEEE:::::ERR:::::R     R:::::R     EE::::::EEEEEEEE:::::ERR:::::R     R:::::RRR:::::R     R:::::RO:::::::OOO:::::::ORR:::::R     R:::::R
S::::::SSSSSS:::::SE::::::::::::::::::::ER::::::R     R:::::R          V:::::V          E::::::::::::::::::::ER::::::R     R:::::R     E::::::::::::::::::::ER::::::R     R:::::RR::::::R     R:::::R OO:::::::::::::OO R::::::R     R:::::R
S:::::::::::::::SS E::::::::::::::::::::ER::::::R     R:::::R           V:::V           E::::::::::::::::::::ER::::::R     R:::::R     E::::::::::::::::::::ER::::::R     R:::::RR::::::R     R:::::R   OO:::::::::OO   R::::::R     R:::::R
 SSSSSSSSSSSSSSS   EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR            VVV            EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR     EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRRRRRRRRRR     RRRRRRR     OOOOOOOOO     RRRRRRRR     RRRRRRR</pre>`);
});

const port = process.env.PORT ?? 3000;
const ip =
	process.env.NODE_ENV === 'production'
		? '0.0.0.0'
		: Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat((i.family === 'IPv4' && !i.internal && i.address) || []), [])), [])[0];

app.listen(port, ip, () => console.log(`Server listening at http://${ip}:${port}`));
