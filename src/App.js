import React, {useEffect} from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function App() {
    function collides(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y;
    }

    const field = {
        width: 1000,
        height: 800,
        x: 0,
        y: 0
    }
    const bottomWall = {
        width: field.width + 20,
        height: 20,
        x: -10,
        y: 810
    }
    const topWall = {
        width: field.width + 20,
        height: 20,
        x: -10,
        y: -20
    }
    const leftWall = {
        width: 20,
        height: field.height + 40,
        x: -20,
        y: -20
    }
    const rightWall = {
        height: field.height + 40,
        width: 20,
        x: field.width - 10,
        y: -20
    }
    const driftingCar_1 = {
        x: 20,
        y: 750,
        width: 60,
        height: 75,
        moveFront: false,
        moveBack: false,
        moveLeft: false,
        moveRight: false,
        rotate: -90
    }
    const driftingCar_2 = {
        x: 90,
        y: 750,
        width: 60,
        height: 75,
        moveFront: false,
        moveBack: false,
        moveLeft: false,
        moveRight: false,
        rotate: -90
    }
    const first_turn = {

    }
    useEffect(() => {
        const car_1 = document.getElementById('driftingCar_1')
         const car_2 = document.getElementById('driftingCar_2')
        setInterval(() => {
            if (driftingCar_1.moveFront === true) {
                driftingCar_1.y = driftingCar_1.y - Math.sin(Math.PI / 180 * Math.abs(driftingCar_1.rotate))* 2
                driftingCar_1.x = driftingCar_1.x + Math.cos(Math.PI / 180 * Math.abs(driftingCar_1.rotate))* 2
                car_1.style.top = driftingCar_1.y + 'px'
                car_1.style.left = driftingCar_1.x + 'px'
            }
            if (driftingCar_1.moveBack === true) {
                driftingCar_1.y = driftingCar_1.y + Math.sin(Math.PI / 180 * Math.abs(driftingCar_1.rotate))
                driftingCar_1.x = driftingCar_1.x - Math.cos(Math.PI / 180 * Math.abs(driftingCar_1.rotate))
                car_1.style.top = driftingCar_1.y + 'px'
                car_1.style.left = driftingCar_1.x + 'px'
                if (driftingCar_1.moveRight === true) {
                    driftingCar_1.rotate = driftingCar_1.rotate - 2
                    car_1.style.transform = `rotate(${driftingCar_1.rotate}deg)`
                }
                if (driftingCar_1.moveLeft === true) {
                    driftingCar_1.rotate = driftingCar_1.rotate + 2
                    car_1.style.transform = `rotate(${driftingCar_1.rotate}deg)`
                }
            }
            if (driftingCar_1.moveRight === true) {
                driftingCar_1.rotate = driftingCar_1.rotate + 1
                car_1.style.transform = `rotate(${driftingCar_1.rotate}deg)`
            }
            if (driftingCar_1.moveLeft === true) {
                driftingCar_1.rotate = driftingCar_1.rotate - 1
                car_1.style.transform = `rotate(${driftingCar_1.rotate}deg)`
            }

            if (collides(driftingCar_1, bottomWall) === true) {
                driftingCar_1.y = driftingCar_1.y - 3
                car_1.style.top = driftingCar_1.y + 'px'
            } else if (collides(driftingCar_1, topWall) === true) {
                driftingCar_1.y = driftingCar_1.y + 3
                car_1.style.top = driftingCar_1.y + 'px'

            } else if (collides(driftingCar_1, leftWall) === true) {
                driftingCar_1.x = driftingCar_1.x + 3
                car_1.style.left = driftingCar_1.x + 'px'

            } else if (collides(driftingCar_1, rightWall) === true) {
                driftingCar_1.x = driftingCar_1.x - 3
                car_1.style.left = driftingCar_1.x + 'px'
            }

            if (driftingCar_1.rotate < -359) {
                driftingCar_1.rotate = 0
            } else if (driftingCar_1.rotate > 0) {
                driftingCar_1.rotate = -360
            }
            if (driftingCar_2.moveFront === true) {
                driftingCar_2.y = driftingCar_2.y - Math.sin(Math.PI / 180 * Math.abs(driftingCar_2.rotate))* 2
                driftingCar_2.x = driftingCar_2.x + Math.cos(Math.PI / 180 * Math.abs(driftingCar_2.rotate))* 2
                car_2.style.top = driftingCar_2.y + 'px'
                car_2.style.left = driftingCar_2.x + 'px'
            }
            if (driftingCar_2.moveBack === true) {
                driftingCar_2.y = driftingCar_2.y + Math.sin(Math.PI / 180 * Math.abs(driftingCar_2.rotate))
                driftingCar_2.x = driftingCar_2.x - Math.cos(Math.PI / 180 * Math.abs(driftingCar_2.rotate))
                car_2.style.top = driftingCar_2.y + 'px'
                car_2.style.left = driftingCar_2.x + 'px'
                if (driftingCar_2.moveRight === true) {
                    driftingCar_2.rotate = driftingCar_2.rotate - 2
                    car_2.style.transform = `rotate(${driftingCar_2.rotate}deg)`
                }
                if (driftingCar_2.moveLeft === true) {
                    driftingCar_2.rotate = driftingCar_2.rotate + 2
                    car_2.style.transform = `rotate(${driftingCar_2.rotate}deg)`
                }
            }
            if (driftingCar_2.moveRight === true) {
                driftingCar_2.rotate = driftingCar_2.rotate + 1
                car_2.style.transform = `rotate(${driftingCar_2.rotate}deg)`
            }
            if (driftingCar_2.moveLeft === true) {
                driftingCar_2.rotate = driftingCar_2.rotate - 1
                car_2.style.transform = `rotate(${driftingCar_2.rotate}deg)`
            }

            if (collides(driftingCar_2, bottomWall) === true) {
                driftingCar_2.y = driftingCar_2.y - 3
                car_2.style.top = driftingCar_2.y + 'px'
            } else if (collides(driftingCar_2, topWall) === true) {
                driftingCar_2.y = driftingCar_2.y + 3
                car_2.style.top = driftingCar_2.y + 'px'

            } else if (collides(driftingCar_2, leftWall) === true) {
                driftingCar_2.x = driftingCar_2.x + 3
                car_2.style.left = driftingCar_2.x + 'px'

            } else if (collides(driftingCar_2, rightWall) === true) {
                driftingCar_2.x = driftingCar_2.x - 3
                car_2.style.left = driftingCar_2.x + 'px'
            }

            if (driftingCar_2.rotate < -359) {
                driftingCar_2.rotate = 0
            } else if (driftingCar_2.rotate > 0) {
                driftingCar_2.rotate = -360
            }


        }, 1)

    }, [])

    const startMoving_1 = function (e) {
        // first player start
        if (e.which === 38) {
            driftingCar_1.moveFront = true
            driftingCar_1.moveBack = false
        } else if (e.which === 40) {
            driftingCar_1.moveFront = false
            driftingCar_1.moveBack = true
        }
        if (e.which === 39) {
            driftingCar_1.moveRight = true
            driftingCar_1.moveLeft = false
        } else if (e.which === 37) {
            driftingCar_1.moveRight = false
            driftingCar_1.moveLeft = true
        }
    }
    const startMoving_2 = function (e){
         // second player start
        if (e.which === 87) {
            driftingCar_2.moveFront = true
            driftingCar_2.moveBack = false
        } else if (e.which === 83) {
            driftingCar_2.moveFront = false
            driftingCar_2.moveBack = true
        }
        if (e.which === 68) {
            driftingCar_2.moveRight = true
            driftingCar_2.moveLeft = false
        } else if (e.which === 65) {
            driftingCar_2.moveRight = false
            driftingCar_2.moveLeft = true
        }
    }
    const stopMoving_1 = function (e) {
        // first player stop
        if (e.which === 38 ) {
            driftingCar_1.moveFront = false
        } else if (e.which === 40) {
            driftingCar_1.moveBack = false
        }
        if (e.which === 39) {
            driftingCar_1.moveRight = false
        } else if (e.which === 37) {
            driftingCar_1.moveLeft = false
        }

    }
    const stopMoving_2 = function (e) {
        // second player stop
        if ( e.which === 87 ) {
            driftingCar_2.moveFront = false
        } else if ( e.which === 83) {
            driftingCar_2.moveBack = false
        }
        if ( e.which === 68) {
            driftingCar_2.moveRight = false
        } else if ( e.which === 65) {
            driftingCar_2.moveLeft = false
        }

    }

    function move() {
        document.addEventListener('keydown', startMoving_1)
        document.addEventListener('keydown', startMoving_2)

    }
    function stop() {
        document.addEventListener('keyup', stopMoving_1)
        document.addEventListener('keyup', stopMoving_2)
    }


    return (
        <div className={'fieldWW'}>
            <div id={'top'}>

            </div>
            <div id={'left'}>

            </div>
            <div id={'right'}>

            </div>
            <div className={'field'}  onKeyDown={move()} onKeyUp={stop()}>
                <div className={'cars'}>
                    <i id={'driftingCar_1'} style={{color: '#3A75C4 ', fontSize: '60px'}} className="fas fa-fighter-jet"> </i>
                    <i id={'driftingCar_2'} style={{color: '#FDE910 ', fontSize: '60px'}} className="fas fa-fighter-jet"> </i>
                </div>
                <div className={'walls'}>
                    <div id={'first_turn'}> </div>
                    <div id={'second_turn'}> </div>
                    <div id={'third_turn'}> </div>
                    <div id={'fourth_turn'}> </div>
                </div>
            </div>
            <div id={'bottom'}>

            </div>

        </div>
    );
}
