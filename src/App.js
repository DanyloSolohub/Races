import React, {useEffect, useState} from 'react'
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
    const plane_1 = {
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
    const plane_2 = {
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
    const first_turn_out = {
        width: 10,
        height: 630,
        x: 170,
        y: 170,
    }
    const first_turn_in = {
        width: 10,
        height: 630,
        x: 180,
        y: 170,
    }
    const second_turn_out = {
        width: 660,
        height: 10,
        x: 170,
        y: 180,
    }
    const second_turn_in = {
        width: 660,
        height: 10,
        x: 170,
        y: 190,
    }
    const third_turn_out = {
        width: 10,
        height: 560,
        x: 830,
        y: 170,
    }
    const third_turn_in = {
        width: 10,
        height: 560,
        x: 820,
        y: 170,
    }
    const fourth_turn_out = {
        width: 470,
        height: 10,
        x: 270,
        y: 630,
    }
    const fourth_turn_in = {
        width: 470,
        height: 10,
        x: 270,
        y: 640,
    }
    const finish = {
        width: 40,
        height: 40,
        x: 500,
        y: 400,
    }
    const [countYellow, setCountB] = useState(0)
    const [countBlue, setCountY] = useState(0)
    useEffect(() => {
        const car_1 = document.getElementById('plane_1')
        const car_2 = document.getElementById('plane_2')
        setInterval(() => {
            if (plane_1.moveFront === true) {
                plane_1.y = plane_1.y - Math.sin(Math.PI / 180 * Math.abs(plane_1.rotate)) * 2
                plane_1.x = plane_1.x + Math.cos(Math.PI / 180 * Math.abs(plane_1.rotate)) * 2
                car_1.style.top = plane_1.y + 'px'
                car_1.style.left = plane_1.x + 'px'
            }
            if (plane_1.moveBack === true) {
                plane_1.y = plane_1.y + Math.sin(Math.PI / 180 * Math.abs(plane_1.rotate))
                plane_1.x = plane_1.x - Math.cos(Math.PI / 180 * Math.abs(plane_1.rotate))
                car_1.style.top = plane_1.y + 'px'
                car_1.style.left = plane_1.x + 'px'
                if (plane_1.moveRight === true) {
                    plane_1.rotate = plane_1.rotate - 2
                    car_1.style.transform = `rotate(${plane_1.rotate}deg)`
                }
                if (plane_1.moveLeft === true) {
                    plane_1.rotate = plane_1.rotate + 2
                    car_1.style.transform = `rotate(${plane_1.rotate}deg)`
                }
            }
            if (plane_1.moveRight === true) {
                plane_1.rotate = plane_1.rotate + 1
                car_1.style.transform = `rotate(${plane_1.rotate}deg)`
            }
            if (plane_1.moveLeft === true) {
                plane_1.rotate = plane_1.rotate - 1
                car_1.style.transform = `rotate(${plane_1.rotate}deg)`
            }

            if (collides(plane_1, bottomWall) === true) {
                plane_1.y = plane_1.y - 3
                car_1.style.top = plane_1.y + 'px'
            } else if (collides(plane_1, topWall) === true) {
                plane_1.y = plane_1.y + 3
                car_1.style.top = plane_1.y + 'px'

            } else if (collides(plane_1, leftWall) === true) {
                plane_1.x = plane_1.x + 3
                car_1.style.left = plane_1.x + 'px'

            } else if (collides(plane_1, rightWall) === true) {
                plane_1.x = plane_1.x - 3
                car_1.style.left = plane_1.x + 'px'
            } else if (collides(plane_1, first_turn_out) === true) {
                plane_1.x = plane_1.x - 3
                car_1.style.left = plane_1.x + 'px'
            } else if (collides(plane_1, first_turn_in) === true) {
                plane_1.x = plane_1.x + 3
                car_1.style.left = plane_1.x + 'px'
            } else if (collides(plane_1, second_turn_out) === true) {
                plane_1.y = plane_1.y - 3
                car_1.style.top = plane_1.y + 'px'
            } else if (collides(plane_1, second_turn_in) === true) {
                plane_1.y = plane_1.y + 3
                car_1.style.top = plane_1.y + 'px'
            } else if (collides(plane_1, third_turn_out) === true) {
                plane_1.x = plane_1.x + 3
                car_1.style.left = plane_1.x + 'px'
            } else if (collides(plane_1, third_turn_in) === true) {
                plane_1.x = plane_1.x - 3
                car_1.style.left = plane_1.x + 'px'
            } else if (collides(plane_1, fourth_turn_out) === true) {
                plane_1.y = plane_1.y - 3
                car_1.style.top = plane_1.y + 'px'
            } else if (collides(plane_1, fourth_turn_in) === true) {
                plane_1.y = plane_1.y + 3
                car_1.style.top = plane_1.y + 'px'
            } else if (collides(plane_1, finish) === true) {
                setCountY((prev) => prev + 1)
                    plane_1.x = 20
                plane_1.y = 750
                plane_1.rotate = -90
                car_1.style.top = plane_1.y + 'px'
                car_1.style.left = plane_1.x + 'px'
                car_1.style.transform = `rotate(${plane_1.rotate}deg)`

            }

            if (plane_1.rotate < -359) {
                plane_1.rotate = 0
            } else if (plane_1.rotate > 0) {
                plane_1.rotate = -360
            }
            // second player
            if (plane_2.moveFront === true) {
                plane_2.y = plane_2.y - Math.sin(Math.PI / 180 * Math.abs(plane_2.rotate)) * 2
                plane_2.x = plane_2.x + Math.cos(Math.PI / 180 * Math.abs(plane_2.rotate)) * 2
                car_2.style.top = plane_2.y + 'px'
                car_2.style.left = plane_2.x + 'px'
            }
            if (plane_2.moveBack === true) {
                plane_2.y = plane_2.y + Math.sin(Math.PI / 180 * Math.abs(plane_2.rotate))
                plane_2.x = plane_2.x - Math.cos(Math.PI / 180 * Math.abs(plane_2.rotate))
                car_2.style.top = plane_2.y + 'px'
                car_2.style.left = plane_2.x + 'px'
                if (plane_2.moveRight === true) {
                    plane_2.rotate = plane_2.rotate - 2
                    car_2.style.transform = `rotate(${plane_2.rotate}deg)`
                }
                if (plane_2.moveLeft === true) {
                    plane_2.rotate = plane_2.rotate + 2
                    car_2.style.transform = `rotate(${plane_2.rotate}deg)`
                }
            }
            if (plane_2.moveRight === true) {
                plane_2.rotate = plane_2.rotate + 1
                car_2.style.transform = `rotate(${plane_2.rotate}deg)`
            }
            if (plane_2.moveLeft === true) {
                plane_2.rotate = plane_2.rotate - 1
                car_2.style.transform = `rotate(${plane_2.rotate}deg)`
            }

            if (collides(plane_2, bottomWall) === true) {
                plane_2.y = plane_2.y - 3
                car_2.style.top = plane_2.y + 'px'
            } else if (collides(plane_2, topWall) === true) {
                plane_2.y = plane_2.y + 3
                car_2.style.top = plane_2.y + 'px'

            } else if (collides(plane_2, leftWall) === true) {
                plane_2.x = plane_2.x + 3
                car_2.style.left = plane_2.x + 'px'

            } else if (collides(plane_2, rightWall) === true) {
                plane_2.x = plane_2.x - 3
                car_2.style.left = plane_2.x + 'px'
            }else if (collides(plane_2, first_turn_out) === true) {
                plane_2.x = plane_2.x - 3
                car_2.style.left = plane_2.x + 'px'
            } else if (collides(plane_2, first_turn_in) === true) {
                plane_2.x = plane_2.x + 3
                car_2.style.left = plane_2.x + 'px'
            } else if (collides(plane_2, second_turn_out) === true) {
                plane_2.y = plane_2.y - 3
                car_2.style.top = plane_2.y + 'px'
            } else if (collides(plane_2, second_turn_in) === true) {
                plane_2.y = plane_2.y + 3
                car_2.style.top = plane_2.y + 'px'
            } else if (collides(plane_2, third_turn_out) === true) {
                plane_2.x = plane_2.x + 3
                car_2.style.left = plane_2.x + 'px'
            } else if (collides(plane_2, third_turn_in) === true) {
                plane_2.x = plane_2.x - 3
                car_2.style.left = plane_2.x + 'px'
            } else if (collides(plane_2, fourth_turn_out) === true) {
                plane_2.y = plane_2.y - 3
                car_2.style.top = plane_2.y + 'px'
            } else if (collides(plane_2, fourth_turn_in) === true) {
                plane_2.y = plane_2.y + 3
                car_2.style.top = plane_2.y + 'px'
            } else if (collides(plane_2, finish) === true) {
                setCountB((prev) => prev + 1)
                plane_2.x = 90
                plane_2.y = 750
                plane_2.rotate = -90
                car_2.style.top = plane_2.y + 'px'
                car_2.style.left = plane_2.x + 'px'
                car_2.style.transform = `rotate(${plane_2.rotate}deg)`

            }

            if (plane_2.rotate < -359) {
                plane_2.rotate = 0
            } else if (plane_2.rotate > 0) {
                plane_2.rotate = -360
            }


        }, 1)

    }, [])

    const startMoving_1 = function (e) {
        // first player start
        if (e.which === 38) {
            plane_1.moveFront = true
            plane_1.moveBack = false
        } else if (e.which === 40) {
            plane_1.moveFront = false
            plane_1.moveBack = true
        }
        if (e.which === 39) {
            plane_1.moveRight = true
            plane_1.moveLeft = false
        } else if (e.which === 37) {
            plane_1.moveRight = false
            plane_1.moveLeft = true
        }
    }
    const startMoving_2 = function (e) {
        // second player start
        if (e.which === 87) {
            plane_2.moveFront = true
            plane_2.moveBack = false
        } else if (e.which === 83) {
            plane_2.moveFront = false
            plane_2.moveBack = true
        }
        if (e.which === 68) {
            plane_2.moveRight = true
            plane_2.moveLeft = false
        } else if (e.which === 65) {
            plane_2.moveRight = false
            plane_2.moveLeft = true
        }
    }
    const stopMoving_1 = function (e) {
        // first player stop
        if (e.which === 38) {
            plane_1.moveFront = false
        } else if (e.which === 40) {
            plane_1.moveBack = false
        }
        if (e.which === 39) {
            plane_1.moveRight = false
        } else if (e.which === 37) {
            plane_1.moveLeft = false
        }

    }
    const stopMoving_2 = function (e) {
        // second player stop
        if (e.which === 87) {
            plane_2.moveFront = false
        } else if (e.which === 83) {
            plane_2.moveBack = false
        }
        if (e.which === 68) {
            plane_2.moveRight = false
        } else if (e.which === 65) {
            plane_2.moveLeft = false
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
        <div>
            <div style={{display:'flex', flexDirection:'row' ,margin:'40px', justifyContent:'space-around'}}>
            <div style={{color:'blue', fontWeight:'bold', fontSize:"40px"}}> BLUE POINTS : {countBlue} </div>
                <div style={{color:'yellow', fontWeight:'bold', fontSize:"40px"}}>YELLOW POINTS : {countYellow}</div>
            </div>
                <div className={'fieldWW'}>
                <div id={'top'}>

                </div>
                <div id={'left'}>

                </div>
                <div id={'right'}>

                </div>
                <div className={'field'} onKeyDown={move()} onKeyUp={stop()}>
                    <div className={'cars'}>
                        <i id={'plane_1'} style={{color: '#3A75C4 ', fontSize: '60px'}}
                           className="fas fa-fighter-jet"> </i>
                        <i id={'plane_2'} style={{color: '#FDE910 ', fontSize: '60px'}}
                           className="fas fa-fighter-jet"> </i>
                    </div>
                    <div className={'walls'}>
                        <div id={'first_turn'}>
                        </div>
                        <div id={'second_turn'}>
                        </div>
                        <div id={'third_turn'}>
                        </div>
                        <div id={'fourth_turn'}>
                        </div>
                        <div id={'finish'}>
                        </div>
                    </div>
                </div>
                <div id={'bottom'}>

                </div>
            </div>
        </div>
    );
}
